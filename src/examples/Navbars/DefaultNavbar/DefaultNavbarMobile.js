import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultNavbarMobile({ routes, open }) {
  const [collapse, setCollapse] = useState("");
  const [nestedCollapse, setNestedCollapse] = useState("");
  const [thirdLevelCollapse, setThirdLevelCollapse] = useState("");

  const handleSetCollapse = (name) => {
    if (collapse === name) {
      setCollapse("");
      setNestedCollapse("");
      setThirdLevelCollapse("");
    } else {
      setCollapse(name);
      setNestedCollapse("");
      setThirdLevelCollapse("");
    }
  };

  const handleSetNestedCollapse = (name) => {
    if (nestedCollapse === name) {
      setNestedCollapse("");
      setThirdLevelCollapse("");
    } else {
      setNestedCollapse(name);
      setThirdLevelCollapse("");
    }
  };

  const handleSetThirdLevelCollapse = (name) => {
    setThirdLevelCollapse(thirdLevelCollapse === name ? "" : name);
  };

  const renderNestedItems = (items, level = 1) => {
    return items.map((item) => {
      const isCollapsed =
        level === 1
          ? item.name === collapse
          : level === 2
          ? item.name === nestedCollapse
          : item.name === thirdLevelCollapse;

      const handleClick =
        level === 1
          ? () => handleSetCollapse(item.name)
          : level === 2
          ? () => handleSetNestedCollapse(item.name)
          : () => handleSetThirdLevelCollapse(item.name);

      return (
        <MKBox key={item.name} px={level}>
          {item.collapse ? (
            <>
              <MKBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                onClick={handleClick}
                sx={{ cursor: "pointer" }}
              >
                <MKTypography
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  py={1}
                  px={0.5}
                >
                  {item.name}
                </MKTypography>
                <Icon>{isCollapsed ? "keyboard_arrow_up" : "keyboard_arrow_down"}</Icon>
              </MKBox>
              <Collapse in={isCollapsed} timeout="auto" unmountOnExit>
                {item.collapse && renderNestedItems(item.collapse, level + 1)}
              </Collapse>
            </>
          ) : (
            <MKBox
              component={item.route ? Link : MuiLink}
              to={item.route || ""}
              href={item.href || ""}
              target={item.href ? "_blank" : ""}
              rel="noreferrer"
              sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                borderRadius: borderRadius.md,
                cursor: "pointer",
                transition: "all 300ms linear",
                py: 1,
                px: 1.625,

                "&:hover": {
                  backgroundColor: grey[200],
                  color: dark.main,
                  "& *": { color: dark.main },
                },
              })}
            >
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
              >
                {item.name}
              </MKTypography>
              {item.description && (
                <MKTypography
                  display="block"
                  variant="button"
                  color="text"
                  fontWeight="regular"
                  sx={{ transition: "all 300ms linear" }}
                >
                  {item.description}
                </MKTypography>
              )}
            </MKBox>
          )}
        </MKBox>
      );
    });
  };

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
        {renderNestedItems(routes)}
      </MKBox>
    </Collapse>
  );
}

DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
};

export default DefaultNavbarMobile;

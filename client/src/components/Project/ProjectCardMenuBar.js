import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { BiSolidUserPlus } from "react-icons/bi";
import { HiShare } from "react-icons/hi";
import ProjectCardDeleteAlert from "./ProjectCardDeleteAlert";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const ProjectCardMenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        <BsThreeDotsVertical className="fs-3" />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <BiSolidUserPlus className="me-2" />
          Invite User
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon className="me-2" />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <HiShare className="me-2" />
          Share To Client
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon className="me-2" />
          Duplicate
        </MenuItem>
        <MenuItem
          onClick={() => {
            setShowDeleteAlert(true);
            handleClose();
          }}
          className="text-danger"
        >
          <MdDelete className="me-2" />
          Delete
        </MenuItem>
      </StyledMenu>
      <ProjectCardDeleteAlert
        show={showDeleteAlert}
        handleClose={() => setShowDeleteAlert(false)}
      />
    </div>
  );
};

export default ProjectCardMenuBar;

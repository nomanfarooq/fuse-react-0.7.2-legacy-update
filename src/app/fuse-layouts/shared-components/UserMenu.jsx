import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../auth/store/userSlice";
import SocketContext from "app/SocketContext";
import { Tooltip } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme, colortype }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: colortype,
        color: colortype,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

function UserMenu(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { reportSocket } = useContext(SocketContext);

    const user = useSelector(({ auth }) => auth.user);
    const socket = useSelector(({ auth }) => auth.socket);
    const [userMenu, setUserMenu] = useState(null);

    const userMenuClick = (event) => {
        setUserMenu(event.currentTarget);
    };

    const userMenuClose = () => {
        setUserMenu(null);
    };

    function HandleLogOut() {
        dispatch(LogOutSessions());
        dispatch(logoutUser());
        reportSocket?.disconnect();
    }

    return (
        <>
            <Button
                className="min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6"
                onClick={userMenuClick}
                color="inherit"
            >
                <div className="hidden md:flex flex-col mx-4 items-end">
                    <Typography component="span" className="font-semibold flex">
                        {user?.data?.display_name}
                    </Typography>
                    <Typography
                        className="text-11 font-medium capitalize"
                        color="textSecondary"
                    >
                        {user?.role?.toString()}
                        {(!user?.role ||
                            (Array.isArray(user?.role) && user?.role.length === 0)) &&
                            "Guest"}
                    </Typography>
                </div>
                <Tooltip title={socket?.success ? "Online" : "Offline"}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        colortype={socket?.success ? "#44B700" : "#E08E23"}
                    >
                        {user?.data.image_url ? (
                            <Avatar
                                className="md:mx-4"
                                alt="user photo"
                                src={user?.data.image_url}
                            />
                        ) : (
                            <Avatar className="md:mx-4"></Avatar>
                        )}
                    </StyledBadge>
                </Tooltip>
            </Button>

            <Popover
                open={Boolean(userMenu)}
                anchorEl={userMenu}
                onClose={userMenuClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                classes={{
                    paper: "py-8",
                }}
            >
                {!user?.role || user?.role.length === 0 ? (
                    <>
                        <MenuItem component={Link} to="/login" role="button">
                            <ListItemIcon className="min-w-40">
                                <Icon>lock</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </MenuItem>
                        {/* <MenuItem component={Link} to="/register" role="button">
              <ListItemIcon className="min-w-40">
                <Icon>person_add</Icon>
              </ListItemIcon>
              <ListItemText primary="Register" />
            </MenuItem> */}
                    </>
                ) : (
                    <>
                        <MenuItem
                            component={Link}
                            to="/account/profile"
                            onClick={userMenuClose}
                            role="button"
                        >
                            <ListItemIcon className="min-w-40">
                                <Icon>account_circle</Icon>
                            </ListItemIcon>
                            <ListItemText primary="My Profile" />
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            to="/register"
                            onClick={userMenuClose}
                            role="button"
                        >
                            <ListItemIcon className="min-w-40">
                                <Icon>add</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Add user" />
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                //localStorage.clear();
                                HandleLogOut();
                                userMenuClose();
                                navigate("/login");
                            }}
                        >
                            <ListItemIcon className="min-w-40">
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </MenuItem>
                    </>
                )}
            </Popover>
        </>
    );
}

export default UserMenu;

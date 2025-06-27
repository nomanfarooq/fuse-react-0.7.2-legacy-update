import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "app/store/i18nSlice";
import { setUser } from "app/auth/store/userSlice";
import jwtService from "app/services/jwtService";

const languages = [
    { id: "en", title: "English", flag: "us" },
    { id: 'tr', title: 'Turkish', flag: 'tr' },
    { id: "ar", title: "Arabic", flag: "sa" },
];

function LanguageSwitcher(props) {
    const dispatch = useDispatch();
    const user = useSelector(({ auth }) => auth.user.data);
    const stateData = useSelector(({ auth }) => auth.user);
    const currentLanguageId = useSelector(({ auth }) => auth.user.data?.user_personalization?.language || "en");
    const currentLanguage = languages.find((x) => x.id === currentLanguageId);

    const [menu, setMenu] = useState(null);
    const langMenuClick = (event) => {
        setMenu(event.currentTarget);
    };

    const langMenuClose = () => {
        setMenu(null);
    };

    function handleLanguageChange(lng) {
        const newUser = { ...user, user_personalization: { ...user.user_personalization, language: lng.id } };
        dispatch(setUser({ ...stateData, data: newUser }))
        dispatch(changeLanguage(lng.id));
        if (user?.reseller_id) jwtService.updateDataToSessionStorage(newUser)
        else {
            jwtService.updateDataToLocalStorage(newUser)
            dispatch(updateUserPersonalSetting({ language: lng.id }));
        }
        langMenuClose();
    }

    useEffect(() => {
        if (user?.user_personalization?.language)
            dispatch(changeLanguage(user?.user_personalization?.language));
    }, []);

    return (
        <>
            <Button className="h-40 w-64" onClick={langMenuClick}>
                <img
                    className="mx-4 min-w-20"
                    src={`assets/images/flags/${currentLanguage.flag}.png`}
                    alt={currentLanguage.title}
                />

                <Typography
                    className="mx-4 font-semibold uppercase"
                    color="textSecondary"
                >
                    {currentLanguage.id}
                </Typography>
            </Button>

            <Popover
                open={Boolean(menu)}
                anchorEl={menu}
                onClose={langMenuClose}
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
                {languages.map((lng) => (
                    <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
                        <ListItemIcon className="min-w-40">
                            <img
                                className="min-w-20"
                                src={`assets/images/flags/${lng.flag}.png`}
                                alt={lng.title}
                            />
                        </ListItemIcon>
                        <ListItemText primary={lng.title} />
                    </MenuItem>
                ))}

                {/* <MenuItem
          component={Link}
          to="/documentation/configuration/multi-language"
          onClick={langMenuClose}
          role="button"
        >
          <ListItemText primary="Learn More" />
        </MenuItem> */}
            </Popover>
        </>
    );
}

export default LanguageSwitcher;

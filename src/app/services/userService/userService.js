import FuseUtils from "../../../@fuse/utils";
import jwtService from "../jwtService";

class UserService extends FuseUtils.EventEmitter {
  init() {
    //console.log('==== User SERVICE ====');
    //this.tokenCheck();
  }

  tokenCheck = async () => {
    const sessionToken = await jwtService.getTokenSession();
    const sessionUser = await jwtService.getUserSessionData();
    if (sessionToken) {
      //console.log("====== SESSION_TOKEN_CHECK ======= NAVIGATION_CASE");
      this.settingsCheck(sessionUser);
      return;
    }

    const token = await jwtService.getToken();
    const localUser = await jwtService.getUserData();
    if (token) {
      //console.log("====== TOKEN_CHECK ======= NAVIGATION_CASE");
      this.settingsCheck(localUser);
    }
  };

  settingsConfig = (user, navigationsConfigWeb) => {
    let moduleNamesArray = user?.modules?.shortcuts.map((item) => item.module);

    const onRenderModule = (moduleTitle) =>
      moduleNamesArray?.includes(moduleTitle);
    const allComponent = user
      ? user?.modules?.shortcuts.flatMap((module) =>
          module.components
            .filter((comp) => comp.selected)
            .map((comp) => comp.slug)
        )
      : [];

    return navigationsConfigWeb.map((group) => {
      if (group.type === "group") {
        const modifiedGroup = {
          ...group,
          children: group.children.filter((module) =>
            onRenderModule(module.title)
          ),
        };

        modifiedGroup.children = modifiedGroup.children.map((collapse) => {
          if (collapse.type === "collapse") {
            return {
              ...collapse,
              children: collapse.children.filter((child) =>
                allComponent.map((x) => x).includes(child.id)
              ),
            };
          }
          return collapse;
        });
        return modifiedGroup;
      }
      return group;
    });
  };

  moduleList = (user, navigationConfig) => {
    let moduleNamesArray = [];

    moduleNamesArray = user?.modules?.shortcuts.map((item) => item.module);

    navigationConfig.forEach((configItem) => {
      configItem.children.forEach((child) => {
        if (moduleNamesArray?.includes(child.title)) {
          if (child.type === "collapse") {
            let module = user?.modules?.shortcuts.find(
              (x) => x.module === child.title
            );
            let children = module.components
              .filter((c) => c.selected)
              .map((c) => c.slug);
            moduleNamesArray = [...moduleNamesArray, ...children];
          }
        }
      });
    });

    return moduleNamesArray;
  };
}

const instance = new UserService();

export default instance;

var user = {}
var roles = []
export function setUser(data){
    user = data
    roles = data.idTokenClaims.roles
}

export function getUsername(){
    return user.username
}

export function isPermissionDenied(action){
    var status = true
    roles.map(role =>{
        if (action.includes(role)){
            status = false
        }
    })
    return status
}
export const appRoles = {
    Admin: "Administrator",
    Viewer:"Reader",
    SuperUser:"SuperUser",
    AdminConfig:"AdminConfig",
  };
  
export const ACTION_PERMISSIONS = {
    "BasicDialogActionExecutor":[appRoles.Admin,appRoles.SuperUser]
}
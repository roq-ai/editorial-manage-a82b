interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: [],
  tenantRoles: ['System Administrator', 'Author', 'Reviewer', 'Editor'],
  tenantName: 'Publisher',
  applicationName: 'Editorial Management System ',
  addOns: ['chat', 'notifications', 'file'],
};

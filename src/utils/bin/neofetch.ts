import { formatDistanceToNow } from 'date-fns';
import packageJson from '../../../package.json';
import config from '../../../config.json';

const macos = `
                    'c.
                 ,xNMM.
               .OMMMMo
               OMMM0,
     .;loddo:' loolloddol;.
   cKMMMMMMMMMMNWMMMMMMMMMM0:
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    
 XMMMMMMMMMMMMMMMMMMMMMMMX.      
;MMMMMMMMMMMMMMMMMMMMMMMM:       
:MMMMMMMMMMMMMMMMMMMMMMMM:       
.MMMMMMMMMMMMMMMMMMMMMMMMX.      
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   
    kMMMMMMMMMMMMMMMMMMMMMMd     
     ;KMMMMMMMWXXWMMMMMMMk.      
       .cooc,.    .,coo:.        
`;

const windows = `
                                ..,
                    ....,,:;+ccllll
      ...,,+:;  cllllllllllllllllll
,cclllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
                                      
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
\`'ccllllllllll  lllllllllllllllllll
       \`' \*::  :ccllllllllllllllll
                       \`\`\`\`''*::cll
`;

const linux = `
            .-/+oossssoo+/-.               
        \`:+ssssssssssssssssss+:\`           
      -+ssssssssssssssssssyyssss+-         
    .ossssssssssssssssssdMMMNysssso.       
   /ssssssssssshdmmNNmmyNMMMMhssssss/      
  +ssssssssshmydMMMMMMMNddddyssssssss+     
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    
  +sssssssssdmydMMMMMMMMddddyssssssss+     
   /ssssssssssshdmNNNNmyNMMMMhssssss/      
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.
`;

const getPlatform = (): 'Unknown' | 'Windows' | 'MacOS' | 'Linux' => {
  let os: 'Unknown' | 'Windows' | 'MacOS' | 'Linux' = 'Unknown';

  if (navigator.userAgent.indexOf('Win') != -1) {
    os = 'Windows';
  }

  if (navigator.userAgent.indexOf('Mac') != -1) {
    os = 'MacOS';
  }

  if (navigator.userAgent.indexOf('Linux') != -1) {
    os = 'Linux';
  }

  return os;
};

const getMainColor = () => {
  const platform = getPlatform();

  switch (platform) {
    case 'MacOS':
      return config.colors.dark.green;
    case 'Windows':
      return config.colors.dark.blue;
    case 'Linux':
      return config.colors.dark.red;
  }
};

const getArt = () => {
  const platform = getPlatform();
  const mainColor = getMainColor();

  switch (platform) {
    case 'MacOS':
      return `<p style="color: ${mainColor}">${macos}</p>`;
    case 'Windows':
      return `<p style="color: ${mainColor}">${windows}</p>`;
    case 'Linux':
      return `<p style="color: ${mainColor}">${linux}</p>`;
  }
};

const getInfo = () => {
  const os = getPlatform();
  const visitedAt = new Date(
    localStorage.getItem('visitedAt') || new Date().toString(),
  );
  const hostname = window.location.hostname;
  const language = navigator.language;
  const platform = navigator.platform;
  const vendor = navigator.vendor;
  const resolution = `${window.screen.availWidth}x${window.screen.availHeight}`;
  const packages = Object.keys(packageJson.dependencies);
  const devPackages = Object.keys(packageJson.devDependencies);
  const mainColor = getMainColor();

  let message = '';

  message += `<span style="color: ${mainColor}">Host</span>: ${hostname}\n`;
  message += `<span style="color: ${mainColor}">OS</span>: ${os}\n`;
  message += `<span style="color: ${mainColor}">Platform</span>: ${platform}\n`;
  message += `<span style="color: ${mainColor}">Vendor</span>: ${vendor}\n`;
  message += `<span style="color: ${mainColor}">Language</span>: ${language}\n`;
  message += `<span style="color: ${mainColor}">Packages</span>: ${
    packages.length + devPackages.length
  } (npm)\n`;
  message += `<span style="color: ${mainColor}">Resolution</span>: ${resolution}\n`;
  message += `<span style="color: ${mainColor}">Shell</span>: gspidermac\n`;
  message += `<span style="color: ${mainColor}">License</span>: ${packageJson.license}\n`;
  message += `<span style="color: ${mainColor}">Version</span>: ${packageJson.version}\n`;
  message += `<span style="color: ${mainColor}">Repo</span>: <a href="${packageJson.repository.url}" target="_blank">${packageJson.repository.url}</a>\n`;
  message += `<span style="color: ${mainColor}">Uptime</span>: ${formatDistanceToNow(
    visitedAt,
  )}\n`;
  message += `<span style="color: ${mainColor}">Credit</span>: ${packageJson.author2.name} (${packageJson.author2.email})\n`;

  return message;
};

export const neofetch = async (args?: string[]): Promise<string> => {
  const art = getArt();
  const info = getInfo();

  return `
  <table>
    <tr>
      <td>${art}</td>
      <td>${info}</td>
    <tr>
  </table>
  `;
};

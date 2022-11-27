// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More commands with info about me:
'sumfetch' - short summary.
'man' - gspidermac Manual.
'linkedin' - professional profile.`;
};

export const resume = async (args: string[]): Promise<string> => {
  //window.open(`${config.resume_url}`);
  return 'try with linkedin command';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `cd: no such file or directory: ${args.join(' ')}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://gfycat.com/falsebravegnat', '_blank');
  return `Permission denied: with little power comes... no responsibility? `;
};

export const man = async (args?: string[]): Promise<string> => {
  window.open('https://gspidermac.github.io', '_blank');
  return `gspidermac Manual`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
                                                                                       
                           MMMMMM      MMMMMM     MMMMMM       MMMMMM                  
                          MMMMMMM      MMMMMM     MMMMMM      MMMMMMM                  
                         MMMMMMMMM     MMMMMM     MMMMMM     MMMMMMMMM                 
                        MMMMMMMMMMM    MMMMMM     MMMMMM     MMMMMMMMMM                
                        MMMMMMMMMMM    MMMMMM     MMMMMM    MMMMMMMMMMM                
                       MMMMMM MMMMMM                       MMMMMM MMMMMM               
                      MMMMMM   MMMMMM                     MMMMMM   MMMMMM              
                      MMMMM    MMMMMM                     MMMMMM    MMMMM              
                     MMMMMM     MMMMMM                   MMMMMM     MMMMMM             
                    MMMMMM       MMMMMM                 MMMMMM       MMMMMM            
                   MMMMMM         MMMMMM                MMMMM         MMMMMM           
                   MMMMMM         MMMMMM               MMMMMM         MMMMMM           
                  MMMMMM           MMMMMM             MMMMMM           MMMMMM          
                 MMMMMM             MMMMM             MMMMM             MMMMMM         
                 MMMMMM             MMMMMM           MMMMMM             MMMMMM         
                MMMMMM               MMMMMM         MMMMMM               MMMMMM        
               MMMMMM                 MMMMMM       MMMMMM                 MMMMMM       
               MMMMMM                 MMMMMM       MMMMMM                  MMMMM       
              MMMMMM                   MMMMMM     MMMMMM                   MMMMMM      
             MMMMMM                     MMMMMM   MMMMMM                     MMMMMM     
             MMMMMM                      MMMMMM  MMMMMM                      MMMMMM    
            MMMMMM                       MMMMMM MMMMMM                       MMMMMM    
           MMMMMM                         MMMMMMMMMMM                         MMMMMM   
          MMMMMM                           MMMMMMMMM                           MMMMMM  
          MMMMMM                           MMMMMMMMM                           MMMMMM  
         MMMMMM                             MMMMMMM                             MMMMMM 
                                                                                       
                                  MM      MM                                           
                                          MM                                           
          MMMMMM  MMMMM  MMMMMM   MM  MMMMMM   MMMM   M MM MMMMMM MMM   MMMMMM   MMMM  
         MM   MM MM      MM   MM  MM MM   MM MM   MM  MM   MM   MM  MM      MM  MM  MM 
         MM   MM   MMMM  MM   MM  MM MM   MM MMMMMMM  MM   MM   MM  MM  MMMMMM MM      
         MM   MM MM   MM MM   MM  MM MM   MM MM   MM  MM   MM   MM  MM MM   MM  MM  MM 
          MMM MM  MMMMM  MMMMMM   MM  MMMMMM   MMMM   MM   MM   MM  MM  MMMMMM   MMMM  
         MM   MM         MM                                                            
           MMM           MM                                                            

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

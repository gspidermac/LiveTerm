import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">LinkedIn</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓         <u><a href="https://github.com/${config.social.github}" target="_blank">GitHub</a></u>      
▐▓      > G S P I D E R M A C      ▓        -----------  
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓         CONTACT
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="mailto:${config.email}" target="_blank">Email</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             HOBBIES 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               爵 <u><a href="${config.music}" target="_blank">Music Band: Liftoff!</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="${config.photography}" target="_blank">Photography</a></u>

`;
};

export default sumfetch;

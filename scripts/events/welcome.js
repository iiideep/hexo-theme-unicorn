const logger = require('hexo-log')()

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  logger.info(`
  ===========================================================================
               __  __ _   __ ____ ______ ____   ____   _   __
              / / / // | / //  _// ____// __ \\ / __ \\ / | / /
             / / / //  |/ / / / / /    / / / // /_/ //  |/ / 
            / /_/ // /|  /_/ / / /___ / /_/ // _, _// /|  /  
            \\____//_/ |_//___/ \\____/ \\____//_/ |_|/_/ |_/   

              ${version} by kp, Based on Jerry's BUTTERFLY                        
  ============================================================================`)
})

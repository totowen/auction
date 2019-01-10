/*该文件负责引导应用的启动*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {/*如果是生产环境就关闭开发者模式*/
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)/*传入AppModule作为主模块启动*/
  .catch(err => console.error(err));

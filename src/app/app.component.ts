import { Component } from '@angular/core'; /*引入装饰器*/

/*组件元数据装饰器
* 1.所有的组件必须由@Component来注解
* 2.内部的属性就叫元数据，将元数据附加到TypeScript类上面，将类变为框架中的一个组件
* */
@Component({
  selector: 'app-root', /*css的选择器*/
  templateUrl: './app.component.html', /*app-root标签位置展示改模板内容*/
  styleUrls: ['./app.component.css'] /*组件模板中需要用到的样式*/
})

/*控制器
* 大部分页面模板的逻辑和属性都包含在这个里面
* */
export class AppComponent {
  title = 'angular入门实战';
}

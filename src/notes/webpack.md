## webpack

- `entry` : 入口文件  
- `mode` : 当前模式，可以选择`development`，`production`或者`none` 中的其中一个，默认值为`production`   
- `optimization`: 优化
  - `minimize`: `boolean` 是否启用代码压缩
  - `minimizer`: `[TerserPlugin]` 通过提供一个或者多个定制的`TerserPlugin`实例，来覆盖默认压缩工具

- `module`: 模块
  - `rules`: `[Rule]` 规则数组，根据规则使不同模块匹配对应规则。
    - `test`: 根据正则匹配对应文件
    - `use`: 使用相关loader进行处理 
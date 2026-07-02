---
title: 计算物理
---

# 计算物理

计算物理关注“如何把物理问题变成可靠的数值实验”。除了写出程序，更重要的是说明模型假设、离散方法、误差来源和结果能否复现。

## 写作建议

- 给出运行环境、依赖版本和输入参数。
- 说明步长、边界条件和收敛判据。
- 用图表展示结果，并保留生成图表的代码。
- 对数值结果做量纲、极限情况或解析解检查。

```python
import numpy as np

time_step = 0.01
position = 0.0
velocity = 1.0
next_position = position + velocity * time_step
```

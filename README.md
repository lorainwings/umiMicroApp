# 微应用 Demo

## 脚本

开启整个微应用

```bash
npm run dev:all
```

## 注意事项

一定要等子应用开启服务之后, 才开启主应用, 所以可以使用 `concurrently` 和 `wait-on` 来搭配开启服务

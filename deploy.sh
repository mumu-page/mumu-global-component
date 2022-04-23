#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
rm -rf ./build
# 生成静态文件
npm run build
# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git branch gh-pages
git checkout gh-pages
git remote add origin git@github.com:mumu-page/mumu-global-component.git
git push -f origin gh-pages
rm -rf ./build
cd -
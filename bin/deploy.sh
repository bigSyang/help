#!/bin/bash
################################
#
#  快速部署EDGS-DOCS
#
###############################

script_dir_path=$(dirname "$0")
cd "${script_dir_path}/../" || exit
base_dir_path=$(pwd)

build_edgs_docs() {
  echo '打包edgs-docs'
  if ! pnpm run build;
  then
    echo '打包edgs-docs失败'
    exit 1
  fi
}

upload_html() {
  echo '上传docs html'
  if [ ! -d "/opt/edgs/docs/help-docs" ]; then
    su - edgs -l -c "mkdir -p /opt/edgs/docs/help-docs";
  else
    rm -rf /opt/edgs/docs/help-docs/*
  fi
  cp -R ${base_dir_path}/dist/* /opt/edgs/docs/help-docs/
  chown -R edgs:edgs /opt/edgs/docs/help-docs
}

reload_html() {
  echo '重启nginx服务'
  su - edgs -l -c "sh /opt/edgs/bin/nginx.sh reload";
}

build_edgs_docs
upload_html
reload_html



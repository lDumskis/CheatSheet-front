# This is a sample Dockerfile. "Dockerizing"
# your application should the first step in your
# Kubernetes journey.  The sample below uses a
# multi-stage pattern in order to build some js
# assets combine them with static assets in one
# container image and copy them to a final
# container with nginx installed.  This pattern
# helps keep final images small.
# =============================================

# This is a throwaway container to build the
# js assets that this little app requires
FROM node:13.12.0-alpine3.11 as builder

COPY . .

RUN mkdir /out \
  && npm install \
  && npm run build \
  && cp /public/* /out/

# This is the artifact that will be deployed on
# bosun.  It is just an nginx webserver and the
# assets built in the build continer. This keeps
# the deployed image small.  The built assets are
# simply copied in from the build container.
FROM nginxinc/nginx-unprivileged

COPY  --from=builder /out /usr/share/nginx/html/

EXPOSE 8080
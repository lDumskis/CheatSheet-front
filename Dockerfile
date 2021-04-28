FROM node:alpine as react_build 
#also say 
WORKDIR /app
#copy the react app to the container
COPY . /app/ 

# #prepare the contiainer for building react 
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent 
RUN npm run build 

#prepare nginx
FROM nginx:1.16.0-alpine

COPY --from=react_build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d



#fire up nginx
EXPOSE 8080 
CMD ["nginx","-g","daemon off;"]
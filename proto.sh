#grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src --grpc_out=grpc_js:./src ./proto/service.proto
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src --grpc_out=./src --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin ./proto/service.proto
grpc_tools_node_protoc --ts_out=import_style=commonjs,binary:./src --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts ./proto/service.proto

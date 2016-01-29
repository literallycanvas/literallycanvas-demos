.PHONY: webpack copy-lc-files

build: webpack copy-lc-files

webpack:
	webpack

copy-lc-files:
	mkdir -p build/lc-assets
	cp -r node_modules/literallycanvas/lib/img build/lc-assets/img
	cp -r node_modules/literallycanvas/lib/css build/lc-assets/css

serve: build
	python -m SimpleHTTPServer 8000 .

#!/bin/bash

# if user writes "c name" make a component file
if [ "$1" = "c" ]; then
	if [ "$2" = "" ]; then
		echo "Missing component name"
	else
		mkdir "./src/components/$2"
		touch "./src/components/$2/index.tsx"
		echo "export default function $2() {return()}" >> "./src/components/$2/index.tsx"
	fi
	if [ "$3" = "s" ]; then
		mkdir "./src/components/$2/styles"
		touch "./src/components/$2/styles/index.ts"
	fi
fi
# Getting started with the training code - Java

## Preqrequisites
You will need to install version 6, 7 or 8 of the Java Development Kit. The Java SE verion of the development kit is recommended if you do already have an the JDK installed.

## Get the code
Use `git` to clone the repo locally:

```
git clone https://github.com/dwhelan/training-java.git
```
## Build the code
Change directory into `training-java/folder` and run `gradlew`:

```bash
# Mac, Linux
$ cd training-java/katas
$ ./gradlew build

# Windows
C:\> cd training-java\katas
C:\> .\gradlew build
```

It should build without any errors and the output should look something like:

```
:compileJava
:processResources UP-TO-DATE
:classes
:jar
:assemble
:compileTestJava
:processTestResources UP-TO-DATE
:testClasses
:test
:check
:build

BUILD SUCCESSFUL
```

# Getting started with the training code - Java

## Preqrequisites
You will need to install the Java Development Kit (versions 6, 7, 8 are supported). The Java SE verion of the development kit is recommended if you do not already have an the JDK installed.

## Get the code
Use `git` to clone the repo locally:

```
git clone https://github.com/dwhelan/training-java.git
```

## Build the code
From a command or shell prompt change directory into `training-java/folder` and run `gradlew`:

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

## Using IntelliJ
Once the gradle build has successfully completed, you can can open the katas project in IntelliJ. To do so, start IntelliJ and then `open` the katas folder __note:__ opening each kata individually does not work correctly

## Using Eclipse
Once the cradle build has successfully completed, you can open the katas project in Eclipse. To do so, start Eclipse and then `import` the katas folder.
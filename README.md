[![Build Status](https://travis-ci.org/dwhelan/training-java.svg?branch=master)](https://travis-ci.org/dwhelan/training-java)

This repository contains training exercises and katas for the LeanIntuit Agile Engineering training course in Java.

The exercises are written in Java (with 1.6 language compatability) and will work on JDK's 6, 7 and 8.

## Getting started
The easiest way to access the training exercises is to use `git`. If you really, really don't want to use `git` then
click **Clone or download** on this page, select **Download Zip** and  unzip the files on your local file system.

If you do want to use `git` but don't have it installed we suggest you download it from the [git download page](https://git-scm.com/download/).

With `git` installed you simply open up a shell or command window and clone this repository:

```
$ git clone https://github.com/dwhelan/training-java.git
```

## Eclipse
### Choose a workspace
You can use any workspace you like. You may want to use the `training-java` folder as an Eclipse workspace via `File | Switch Workspace` and select your local `training-java` folder.

### Load the katas project
Load the `katas` project by `File | Import`. When the `Import` dialog opens select `General | Existing Projects inro Workspace` and click `Next`.

Select `Browse` (beside the 'Select root directory) and then select the `katas` folder. You should notice `katas`, with a checkbox beside it, in the list of projects. Click `finish`.

### Running tests
You can run all the tests by right clicking on the `katas` project and selecting `Run As | JUnit Test`. 

You can run individual tests by right clocking on any folder in under `src/test/java` and selecting `Run As | JUnit Test`

You can also use the shortcut **&#8997; &#8984;XT**

# TODO
* reduce payload size in repo

[![Build Status](https://travis-ci.org/dwhelan/training-java.svg?branch=master)](https://travis-ci.org/dwhelan/training-java)

This repository contains training exercises and katas for the LeanIntuit Agile Engineering training course in Java.

The exercises are written in Java (with 1.6 language compatability) and will work on JDK's 6, 7 and 8.

## Getting started
The easiest way to access the training exercises is to use `git`. If you really, really don't want to use `git` then
click **Clone or download** on this page, select **Download Zip** and  unzip the files on your local file system.

If you do want to use `git` but don't have it installed we suggest you download it from the [git download page](https://git-scm.com/download/).

With `git` installed you simply open up a shell or command window and clone this repository:

```
git clone https://github.com/dwhelan/training-java.git
```

## Eclipse
### Choose a workspace
You can use any workspace you like. You may want to use the `training-java` folder as an Eclipse workspace by selecting `File | Switch Workspace` and then selecting your local `training-java` folder.

### Load the katas project
Load the `katas` project by selecting `File | Import`. When the `Import` dialog opens select `General | Existing Projects into Workspace` and then click `Next`.

Select the `Browse` button (beside the 'Select root directory) and then select the `katas` folder under the `training-java` folder that you downloaded. You should notice `katas`, with a checkbox beside it, in the list of projects. Click `finish`.

### Running tests
You can run all the tests by right clicking on the `katas` project and selecting `Run As | JUnit Test`.

You should notice 6 tests run and all of them should be 'skipped'.

You can run individual tests by right clocking on any folder in under `src/test/java` and selecting `Run As | JUnit Test`

You can also use the shortcut **&#8997; &#8984;X T** (Mac) or **Alt+Shift+X,T** (Windows).

You are ready to start on the training katas!

### Setting up Eclipse shortcut keys
The following shortcuts provide a consistent, convenient way to refactor your code. Essentially, on a Mac refactoring shortcuts will start with **&#8997;&#8984;** and on Windows they will start with **ALT+SHIFT**.
Some of the settings will likely be already set, as they are the defaults.

To edit the shortcuts open the Eclipse preferences window and select `General | Keys`.

Enter the text of one of the "Refactoring Commands" from the table below into the text box with the prompt `enter filter text`. Check that the binding shortcut matches the value in the table below. Click on the command (if you see multiple ones that select the one for `Java`). Click in the `Binding` text and enter the shortcut key combination from the table below. Click `Apply`.
  
<table>
 <tr>
  <td>
  <p><b><span>Refactoring Command</span></b></p>
  </td>
  <td>
  <p><b><span>Mac</span></b></p>
  </td>
  <td>
  <p><b><span>Windows</span></b></p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Show Refactor Quick Menu</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>T</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>T</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Change Method Signature</p>
  </td>
  <td>
  <p>CTRL+&#8997;&#8984;</span><span>C</p>
  </td>
  <td>
  <p>ALT+SHIFT+C</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Convert Local Variable to Field</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>F</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>F</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Extract Constant</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>K</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>K</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Extract Local Variable</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>L</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>L</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Extract Method</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>M</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>M</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Inline</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>I</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>I</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Introduce Parameter</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>P</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>P</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Move - Refactoring</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>V</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>V</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Rename - Refactoring</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>R</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>R</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Select Enclosing Element</p>
  </td>
  <td>
  <p>&#8997;&#8984;&#8593;</p>
  </td>
  <td>
  <p>ALT+SHIFT+&#8593;</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Restore Last Selection</p>
  </td>
  <td>
  <p>&#8997;&#8984;&#8595;</p>
  </td>
  <td>
  <p>ALT+SHIFT+&#8595;</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Join Lines</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>J</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>J</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Collapse All</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>,</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>,</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Expand All</p>
  </td>
  <td>
  <p>&#8997;&#8984;</span><span>.</p>
  </td>
  <td>
  <p>ALT+SHIFT+</span><span>.</p>
  </td>
 </tr>
 <tr>
  <td>
  <p><b><span>Other Commands</span></b></p>
  </td>
  <td>
  <p><b><span>Mac</span></b></p>
  </td>
  <td>
  <p><b><span>Windows</span></b></p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Launch previous</p>
  </td>
  <td>
  <p>&#8984;+F11</p>
  </td>
  <td>
  <p>CTRL+F11</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Quick fix</p>
  </td>
  <td>
  <p>&#8984;+1</p>
  </td>
  <td>
  <p>CTRL+1</p>
  </td>
 </tr>
 <tr>
  <td>
  <p>Auto-complete</p>
  </td>
  <td>
  <p>&#8984;+&lt;SPACE&gt;</p>
  </td>
  <td>
  <p>CTRL+&lt;SPACE&gt;</p>
  </td>
 </tr>
</table>

# TODO
* reduce payload size in repo

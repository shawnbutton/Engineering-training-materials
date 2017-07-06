[![Build Status](https://travis-ci.org/dwhelan/training-java.svg?branch=master)](https://travis-ci.org/dwhelan/training-java)

This repository contains training exercises and katas for the LeanIntuit Agile Engineering training course in Java.

The exercises are written in Java (with 1.6 language compatability) and will work on JDK's 6, 7 and 8.

## Getting started
The easiest way to access the training exercises is to use `git`. If you really, really don't want to use `git` then
click **Clone or download** on this page, select **Download Zip** and  unzip the files on your local file system.

If you want to use `git` but don't have it installed we suggest you download it from the [git download page](https://git-scm.com/download/).

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

### Import JUnit templates
There are some code templates that you may find useful. You can import them by.

To import the templates open the Eclipse preferences window and select `Java | Editor | Templates`.
Select `Import` and choose the `junit_templates.xml` file under the `katas` folder. Click `Apply` and then `OK`.

See [here](http://http://help.eclipse.org/neon/index.jsp?topic=%2Forg.eclipse.cdt.doc.user%2Ftasks%2Fcdt_t_imp_code_temp.htm) for more information on using Eclipse templates.

<table>
  <tr>
    <td>Template</td><td>What it does</td>
  </tr>
  <tr>
    <td>aaa</td><td>Declares a JUnit 4 test method with Triple-A comments:
Arrange, Act, and Assert
    </td>
  </tr>
  <tr>
    <td>at</td><td>Inserts the assertThat() method</td>
  </tr>
  <tr>
    <td>ae</td><td>Inserts the body of a test case that is expecting an exception</td>
  </tr>
  <tr>
    <td>ee</td><td>Creates a try/catch block for handling an expected exception in a test</td>
  </tr>  <tr>
    <td>eq</td><td>Inserts the equalTo() matcher</td>
  </tr>
  <tr>
    <td>parameters</td>
    <td>Declares a JUnit 4 test data method to provide data to a
JUnit 4 parameterized test</td>
  </tr>
  <tr>
    <td>test</td><td>Declares a JUnit 4 test method</td>
  </tr>
</table>

**Note** if you have a version of Eclipse before Mars (4.5) the templates may not import properly. You could try a newer Eclipse or enter them by hand. You open the `junit_templates.xml` file in Eclipse and manually add the templates.

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
  <p>Run</p>
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

### Editor favourites
Eclipses uses favourites to autocomplete and automatically import classes and methds even if you have not imported them explicitly.

To set favourites open the Eclipse preferences window and select `Java | Editor | Content Assist | Favourites`.

We want to add a single `Member` shortcut. Select the `New Member` button, enter `java.utils.Collections.asList` and select `OK`.

We want to add a few `Type` shortcuts. For each entry below select the `New Type` button, enter the text from below and select `OK`.

* `java.util.Arrays`
* `org.hamcrest.CoreMatchers`
* `org.hamcrest.Matchers`
* `org.junit.Assert`
* `org.junit.matchers.JUnitMatchers`

Click `Apply` and then `OK`.

# TODO
* reduce payload size in repo
* add column describing context for shortcut keys
* autocomplete key is just there - describe it better
* provide help for Markdown depending on eclipse version

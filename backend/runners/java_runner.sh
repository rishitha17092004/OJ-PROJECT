#!/bin/bash
set -e

# Save Java code to Main.java
echo "$1" > Main.java

# Compile with updated javac
"$JAVA_HOME/bin/javac" Main.java

# Run with updated java
echo "$2" | "$JAVA_HOME/bin/java" Main

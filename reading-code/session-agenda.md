# Exercises

This page contains a set of exercises which can be used in Code Reading Clubs. Of course, your club does not need to use all exercises, they are meant as a starting point. If you are trying out variants, do let us know!
For now we have divided them into basic and advanced. Advanced exercises can be used in clubs that have been running for a while, and especially work well when doing a second code club using the same code snippet.

## Basic Exercises

You will need:

- a timer

  -and-

- a printed copy of the code for the club and coloured pens, crayons or pencils

  -or-

- an electronic means of scribbling on code (e.g. a tablet and tablet pen, PDF annotation software, study-lenses)

### First glance

The goal of this exercise is to practice to get a first impression of code and to act upon that. We all have different instincts and strategies for where to start when faced with a new piece of code. It doesn't matter how trivial you think the first and second things you noticed are.

#### (1 min) Independently - Glance at the code

It's important that is an immediate reaction.

- Right away, note down the first thing that catches your eye.
- Then note down the second thing that catches your eye.
- Take the remainder of the minute to think about why you noticed those things first.

#### (5 mins) Together - Discuss the results

Talk about why things might have jumped out for different people. It might be tempting for some people to start talking about the big picture; try to steer discussion back to individual details, rather than summaries.

- How do those initial observations help with deciding what to look at next?
- What lines or facts or concepts were chosen by everyone versus by only a few people?

Reflect also on what kind of knowledge you used in this exercise:

- Knowledge of the domain, of the programming language?
- What knowledge do you think might be needed to better understand this code?

### Code structure

The goal of this exercise is to be a concrete thing to _do_ when looking at new code for the first time. New code can be scary, doing something will help! Digital annotation can take a bit longer than on paper. Leave time for your group members to settle on a technique that works for them.

#### (10 mins) Independently - Examine structure

Variables

- Go through the code and circle all variables in red
- Then draw a link between variables and their uses

Interactions

- Go through the code and circle all user interactions
- Then draw a link between interactions and the variables they are associated with

Control Flow

- Go through the code and circle all control flow in blue
- Then draw a link between control flow tests and the variables tested

#### (10 mins) Together - Discuss the results

- Did anyone have trouble deciding what constituted a variable, interaction or control flow?
- What patterns are visible from the colors and links only?
- How does the data flow through the code?
- What parts of the code seem to warrant more attention?

### Content

The goal of these exercises is to start to think about which lines in the code define its essence, have the biggest impact or need to be paid close attention to.

#### Option 1

Start by examining the names of things. This is one method for discovering how the code fits together and its intentions. It can help make the identifying important lines exercises less intimidating.

##### All variable names (5 mins)

As a group, go through the code mechanically and create a list of all identifier names in the snippet. This can be done with one person scribing while others call out. If you have done the "examine structure" exercise before, this should be relatively quick and easy; but sometimes, you will need short discussions to agree on things.

##### Discussion (10 mins)

- What can we learn from these names?
- Which elements are related to each other, from the names only?
- Are there names that are ambiguous when looked at without context?

#### Option 2

##### A random line (5 mins)

> if you are using the `?highlight` lens to study your code, there is a [random line] button you can use for this step.

Select a random line from the code in whatever way you like. It can be helpful to randomly pick 3 line numbers and have the facilitator choose from them, which they think will be most interesting to talk about; but surprisingly, even a blank line can generate some conversation!

Examine this line individually. What is the main idea of this line? What lines does it relate to and why?

##### Discussion (10 mins)

Discuss in the group:

- What is the 'scope' of the random line? What part of the code was seen as related?
- How does the line fit into the rest of the code base?

#### (8 mins) Independently - Identify most important lines

Briefly discuss what it means to be important as a group (if you want to)

- then, identify the 5 lines you consider most important

#### (10 mins) Together - Discuss

Discuss in the group:

- lines covered by many people?
- lines named but not by a lot of people
- Agree on less than 8 of the most important lines

Take turns in the group, and let every member talk about the code for 30 seconds (or less/more, could also be one sentence each). Try to add new information and not repeat things that have been said, and repeat until people do not know new things anymore.
[Save the last word for me protocol](https://lead.nwp.org/knowledgebase/save-the-last-word-for-me-protocol/)

### Summary

The goal of this exercise is to think about the core purpose or use of this code.

#### (5 mins) Independently - Summarize

- try to write down the essence of the code in a few sentences

#### (10 mins) Together - Discuss

- topics covered by many vs few
- strategies used to create the summary (e.g. variable names, documentation, prior knowledge, )

#### Independently - homework?

- Compare the summary with the available documentation (inside and outside the code)
- Identify differences and similarities between the group's findings and the existing

## Advanced Exercises

These exercises are more advanced, in the sense that you might need a bit more understanding of the code for these to make sense. This might be because the group is familiar with the code before the session, or because you are doing a second club on the same code snippet. In our experience, the first code club on one code snippet is mainly understanding what the code does, a second session typically goes deeper and sheds more light on the patterns in the code.

### Code structure

#### Examine structure (5 mins)

This first exercise is meant as a recap of the first session on the code, and as a way to onboard people that might have missed the first session on this code snippet.

Go back to your markings of the code where you examined the structure of the code (such as circle variables and link them), or reuse the notes from the previous club. Individually study the patterns and think about what they tell you. What direction does the code 'flow' in? What parts stand out for lack of, or access of links?

#### Discussion (10 mins)

- Parts of the code covered by many vs few
- Strategies used to decide

### Content

#### Central thematic concepts (5 mins)

Each participant gets 5 minutes to individually name the 5 most central concepts of the code. These could be names, themes, language features, or information found in comments. It is important to note that there are no right or wrong answers here! We are not looking for the correct 5 concepts, we are together trying to practice reading code and gain insights into how each other people approach and understand reading code. We have found that one of the most important things people gain from the reading club is realising that people do not all comprehend and create code in the same way.

#### Discussion (10 mins)

- Topics covered by many vs few
- Strategies used to decide (e.g. variable names, comments, documentation, prior knowledge of the program)

#### Central programming concepts (5 mins)

Each participant gets 5 minutes to individually name the 5 most central programming concepts of the code. These could be algorithms, data structures, assumptions or techniques. Again here, no right and wrong! These questions are conversation starters.

#### Discussion (10 mins)

- Topics covered by many vs few
- Strategies used to decide (e.g. variable names, comments, documentation, prior knowledge of the program)

### The decisions made in the code (5 mins)

Each participant gets 5 minutes to individually understand the decisions that were visible in the code. Reexamine the code snippet and list decisions of the creator(s) of the code, for example a decision to use a certain design pattern or use a certain language feature or operator.

You might want to think about these questions:

- What decisions were made in the creation of this code?

#### Discussion (10 mins)

- Decisions covered by many vs few
- Strategies used to decide (e.g. variable names, comments, documentation, prior knowledge of the program)

### Consequences of the decisions (5 mins)

Each participant gets 5 minutes to individually understand the consequences of the decisions that were made. These could be the decisions you found yourself in the previous exercise or a decision someone else pointed out.

You might want to think consider the impact of the decisions this code on:

- readability
- user experience
- strategy

#### Discussion (10 mins)

- Consequences covered by many vs few
- Pros of these decisions
- Possible cons of these decisions

### The 'why' of the decisions (5 mins)

Each participant gets 5 minutes to individually understand the 'why' of the decisions that were made. Can you understand why the code was designed this way?

- What assumptions do these decisions rely on?
- Can you understand why these decisions were made?
- What alternatives would have been possible?

#### Discussion (10 mins)

- Assumptions/alternatives covered by many vs few
- Alternative solutions

---

> adapted from [CodeReadingClub/Resources](https://github.com/CodeReadingClubs/Resources/blob/trunk/exercises.md), modified to line up with the programs in this module

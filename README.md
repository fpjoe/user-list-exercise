# user-list-exercise
Exercise: a basic user list using Ruby on Rails and React.

Things I might do next if I had time:

* Add **sorting**: click on column headers to sort or toggle up/down sort, display up/down arrow to right of column currently being sorted, default sort is surname ascending
* Add **quick preview**: click on name of each user, dialog box pops up with more details on that user including title, birthday, other info
* Add **search filters**: click on filter links at top or side of page, narrows list by various user fields
* Handle **large numbers of pages**: at large numbers of pages, current design wraps/displays correctly but list of page numbers gets awkwardly long - with large data set, use log scale to generate numbers
* Handle **loading...** text more elegantly: with large data set, looks fine, but with only a few records, looks awkward because the 'loading...' appears for only a split second - maybe use setTimeout to display the loading message only after a certain time...?

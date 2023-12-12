# Naughty or Nice

## v0 prompt

The Elves have been tirelessly creating presents all year round. They’re right on schedule, but today they’ve run into a big problem; the ancient system for tracking who’s been naughty or nice is out of commission.

Your mission is to build a system for the elves, enabling them to input names and tally each childs deeds to keep track of whether they’re good or bad. You could even categorise these automatically as “naughty” and “nice.” Fortunately, the elves have been meticulous in their record-keeping and have a backup of all the current data in JSON format. You’ll need to import this data into your newly developed system.

The json file is an array full of records that conform to:

```ts
interface Child {
	name: string
	tally: number
}
```

You can fetch this data by making a GET request to https://advent.sveltesociety.dev/data/2023/day-one.json

### follow-up 1

No input functionality. We should just render the json data. But add search functionality, so users can search for a specific name, and filter on naughty or nice.

### follow-up 2

Nice. Please make the filters toggle-able "pills"

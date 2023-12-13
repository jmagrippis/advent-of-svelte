# Jingle Bell Balancer

## v0 prompt

Santa’s sleigh can carry a maximum load of only 100 kg per journey.

Create a Sleigh Load Balancer (SLB™), a tool designed to ensure that the sleigh is packed efficiently without exceeding its maximum capacity.

The Elves have kept a meticulous record of all the children and the weight of their presents in a JSON format.

The json file is an array full of records that conform to:

```ts
interface Present {
	name: string
	weight: number
}
```

The Sleigh Load Balancer helps keep the Sleigh within its operating weight. Santa can choose whose presents to include on his run. The tool should show the current sleigh load and if the maximum of 100kg has been exceeded.

As a bonus you could include an exciting data visualisation, or even a drag and drop interface!

You can fetch this data by making a GET request to https://advent.sveltesociety.dev/data/2023/day-three.json

import type Config from 'tailwindcss'

declare type _Config = Config
declare namespace plugin {
	export type {_Config as Config}
}

export = plugin

import tinycolor from 'tinycolor2';
import { indigo } from '@mui/material/colors';

const warning = '#FFC260';
const success = '#3CD4A0';
const info = '#9013FE';

const lightenRate = 7.5;
const darkenRate = 15;

const defaultTheme = {
	palette: {
		primary: {
			light: '#9c27b0',
			main: indigo[900],
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#212121',
			dark: '#ba000d',
			contrastText: '#000',
		},
		warning: {
			main: warning,
			light: tinycolor(warning)
				.lighten(lightenRate)
				.toHexString(),
			dark: tinycolor(warning)
				.darken(darkenRate)
				.toHexString(),
		},
		success: {
			main: success,
			light: tinycolor(success)
				.lighten(lightenRate)
				.toHexString(),
			dark: tinycolor(success)
				.darken(darkenRate)
				.toHexString(),
		},
		info: {
			main: info,
			light: tinycolor(info)
				.lighten(lightenRate)
				.toHexString(),
			dark: tinycolor(info)
				.darken(darkenRate)
				.toHexString(),
		},
		text: {
			primary: '#4A4A4A',
			secondary: ' indigo[900]',
			hint: '#B9B9B9',
		},
		background: {
			default: '#F6F7FF',
			light: '#F3F5FF',
		},
	},
	customShadows: {
		widget:
			'0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
		widgetDark:
			'0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
		widgetWide:
			'0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
	},
	overrides: {
		MuiBackdrop: {
			root: {
				backgroundColor: '#4A4A4A1A',
			},
		},
		MuiMenu: {
			paper: {
				boxShadow:
					'0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
			},
		},
		MuiSelect: {
			icon: {
				color: '#B9B9B9',
			},
		},
		MuiListItem: {
			root: {
				'&$selected': {
					backgroundColor: ' indigo[900] !important',
					'&:focus': {
						backgroundColor: ' indigo[900]',
					},
				},
			},
			Button: {
				'&:hover, &:focus': {
					backgroundColor: '#F3F5FF',
				},
			},
		},
		MuiTouchRipple: {
			child: {
				backgroundColor: 'white',
			},
		},
		MuiTableproducts: {
			root: {
				height: 56,
			},
		},
		MuiTableCell: {
			root: {
				borderBottom: '1px solid rgba(224, 224, 224, .5)',
				paddingLeft: 24,
			},
			head: {
				fontSize: '0.95rem',
			},
			body: {
				fontSize: '0.95rem',
			},
		},
		PrivateSwitchBase: {
			root: {
				marginLeft: 10,
			},
		},
	},
};

export default defaultTheme;

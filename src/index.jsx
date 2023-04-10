import React from "react";

import { ApolloProvider } from "@apollo/client";
import { IntlProvider } from "react-intl";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";

import App from "./components";
import client from "./store/client";
import translations from "./i18n";
import theme, { GlobalStyle } from "./components/theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const defaultLocale = "en";

root.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<IntlProvider locale={defaultLocale} messages={translations[defaultLocale]}>
				<RecoilRoot>
					<App />
				</RecoilRoot>
			</IntlProvider>
		</ThemeProvider>
	</ApolloProvider>
);

/*
 * Copyright 2024 Mark T. Tomczak
 * Licensed under the ISC License (https://opensource.org/license/isc-license-txt)
 */

import React from 'react';
import { render } from 'react-dom';

import {App} from './App';

const rootElement = document.getElementById('root');
render(<App />, rootElement);

import {BehaviorSubject} from "rxjs";
const jsonList = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010'];

/**
 * Dialogue Title list
 * @type {BehaviorSubject<*[]>}
 */
export const jsonTitleList = new BehaviorSubject([]);

/**
 * Dynamic Dialogue Loader (upon select from Title list)
 * @type {BehaviorSubject<null>}
 */
export const currentJsonSubject = new BehaviorSubject(null);

/**
 * Dialogue Title toggle: either Ukrainian or English
 * @type {BehaviorSubject<{ukr: boolean, eng: boolean}>}
 */
export const langSet = new BehaviorSubject({eng: false, ukr: true});

/**
 * Initial Dialogue Title list loader
 */
export function readJsonTitles () {
  let titleList = []
  jsonList.forEach(el => titleList.push({[el]: require('../json/d_' + el + '.json').title}));
  jsonTitleList.next(titleList);
}

/**
 * read in a selected JSON file
 * @param jsonFile
 */
export function getCurrentJson (jsonFile = jsonList[0]) {
  const curJsonFile = require('../json/d_' + jsonFile + '.json');
  currentJsonSubject.next(curJsonFile);
}
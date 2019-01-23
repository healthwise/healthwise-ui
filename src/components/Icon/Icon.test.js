/* global describe it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import Icon, {
  AddIcon,
  AnalyticsIcon,
  AnalyticsSimpleIcon,
  BrandingIcon,
  BrandingSimpleIcon,
  CheckboxCheckedIcon,
  CheckboxUncheckedIcon,
  CheckIcon,
  CollapseIcon,
  DashboardIcon,
  DownArrowIcon,
  DownloadIcon,
  EditIcon,
  ExpandIcon,
  GroupsIcon,
  HomeIcon,
  InfoIcon,
  KeyIcon,
  LeftArrowIcon,
  LockedIcon,
  MagnifyingGlassIcon,
  PrinterIcon,
  ProfileIcon,
  RestoreIcon,
  RightArrowIcon,
  TrashIcon,
  UnlockedIcon,
  UpArrowIcon,
  UsersIcon,
  UsersSimpleIcon,
  WarningIcon,
} from './index'

const simpleSvg = <path d="M16.6 8L12 13 7.4 8 6 9.5l6 6.5 6-6.5" fillRule="evenodd" />
const complexSvg = (
  <g fill="none" fillRule="evenodd">
    <path fill="#FCBC3F" d="M41 142h26V84H41m34 58h26V39H75m37.7 103.4h26v-76h-26" />
    <path
      stroke="#FFF"
      strokeWidth="4"
      d="M76 132h15v-27H76zm56 0h15V61h-15zm-28 0h15v-21h-15zm-56 0h15v-11H48zm83-85V26h-21m20.8.2l-92.8 94M20 132h11m-11-12h11m-11-12h11M20 96h11M20 85h11M20 73h11M20 61h11M20 50h11M20 38h11M20 144h130"
    />
  </g>
)

describe('<Icon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Icon>{simpleSvg}</Icon>)
    expect(tree).toMatchSnapshot()
  })

  it('renders all icons correctly', () => {
    const tree = renderer.create(
      <div>
        <AddIcon />
        <AnalyticsIcon />
        <AnalyticsSimpleIcon />
        <BrandingIcon />
        <BrandingSimpleIcon />
        <CheckboxCheckedIcon />
        <CheckboxUncheckedIcon />
        <CheckIcon />
        <CollapseIcon />
        <DashboardIcon />
        <DownArrowIcon />
        <DownloadIcon />
        <EditIcon />
        <ExpandIcon />
        <GroupsIcon />
        <HomeIcon />
        <InfoIcon />
        <KeyIcon />
        <LeftArrowIcon />
        <LockedIcon />
        <MagnifyingGlassIcon />
        <PrinterIcon />
        <ProfileIcon />
        <RestoreIcon />
        <RightArrowIcon />
        <TrashIcon />
        <UnlockedIcon />
        <UpArrowIcon />
        <UsersIcon />
        <UsersSimpleIcon />
        <WarningIcon />
      </div>
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with viewBox property', () => {
    const tree = renderer.create(<Icon viewBox="0 0 170 170">{complexSvg}</Icon>)
    expect(tree).toMatchSnapshot()
  })
})

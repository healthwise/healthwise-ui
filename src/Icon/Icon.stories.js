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
  ScrollToTopIcon,
  TrashIcon,
  UnlockedIcon,
  UpArrowIcon,
  UsersIcon,
  UsersSimpleIcon,
  WarningIcon,
} from './index'

const styles = {
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  container: {
    margin: '0 16px 16px 0',
    borderRadius: '8px',
    width: '156px',
    padding: '16px',
    fontSize: '11px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  largeIconContainer: {
    width: '96px',
    marginBottom: '8px',
  },
  smallIconContainer: {
    width: '48px',
    marginBottom: '8px',
  },
}

const simpleSvg = (
  <path d="M12 14c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4zM12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z" />
)

export default {
  title: 'Media/Icon',
  component: Icon,
}

export const WithDefaults = {
  render: () => (
    <div style={styles.largeIconContainer}>
      <Icon>{simpleSvg}</Icon>
    </div>
  ),

  name: 'with defaults',
}

export const AllIcons = {
  render: () => (
    <div>
      <h2>Complex Icons</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <div style={styles.largeIconContainer}>
            <AnalyticsIcon />
          </div>
          <span>AnalyticsIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.largeIconContainer}>
            <BrandingIcon />
          </div>
          <span>BrandingIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.largeIconContainer}>
            <GroupsIcon />
          </div>
          <span>GroupsIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.largeIconContainer}>
            <UsersIcon />
          </div>
          <span>UsersIcon</span>
        </div>
      </div>
      <h2>Simple Icons</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <AddIcon />
          </div>
          <span>AddIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <AnalyticsSimpleIcon />
          </div>
          <span>AnalyticsSimpleIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <BrandingSimpleIcon />
          </div>
          <span>BrandingSimpleIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <CheckboxCheckedIcon />
          </div>
          <span>CheckboxCheckedIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <CheckboxUncheckedIcon />
          </div>
          <span>CheckboxUncheckedIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <CheckIcon />
          </div>
          <span>CheckIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <CollapseIcon />
          </div>
          <span>CollapseIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <DashboardIcon />
          </div>
          <span>DashboardIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <DownArrowIcon />
          </div>
          <span>DownArrowIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <DownloadIcon />
          </div>
          <span>DownloadIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <EditIcon />
          </div>
          <span>EditIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <ExpandIcon />
          </div>
          <span>ExpandIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <HomeIcon />
          </div>
          <span>HomeIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <InfoIcon />
          </div>
          <span>InfoIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <KeyIcon />
          </div>
          <span>KeyIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <LeftArrowIcon />
          </div>
          <span>LeftArrowIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <LockedIcon />
          </div>
          <span>LockedIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <MagnifyingGlassIcon />
          </div>
          <span>MagnifyingGlassIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <PrinterIcon />
          </div>
          <span>PrinterIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <ProfileIcon />
          </div>
          <span>ProfileIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <RestoreIcon />
          </div>
          <span>RestoreIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <RightArrowIcon />
          </div>
          <span>RightArrowIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <ScrollToTopIcon />
          </div>
          <span>ScrollToTopIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <TrashIcon />
          </div>
          <span>TrashIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <UnlockedIcon />
          </div>
          <span>UnlockedIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <UpArrowIcon />
          </div>
          <span>UpArrowIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <UsersSimpleIcon />
          </div>
          <span>UsersSimpleIcon</span>
        </div>
        <div style={styles.container}>
          <div style={styles.smallIconContainer}>
            <WarningIcon />
          </div>
          <span>WarningIcon</span>
        </div>
      </div>
    </div>
  ),

  name: 'all icons',
}

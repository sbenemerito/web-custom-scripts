const generateConsoleTable = (title, data) => {
  console.log(`-----------${title}------------`);
  const transformed = data.reduce((acc, { myId, ...x }) => {
    acc[myId] = x;
    return acc;
  }, {});
  console.table(transformed);
};

const printOutputSummary = (data) => {
  const {
    jsdocCoverage,
    JSXFileCoverage,
    totalCoverage,
    completelyCoveredFiles,
  } = data;

  console.log('\n###########################################################');
  console.log('Note: A detailed json is generated in doc-coverage directory');

  console.log(
    'Note: Component Files refer to JSX files for react and .vue/.svelte files for vue and svelte respectively'
  );

  generateConsoleTable('JsDoc Coverage', [
    {
      myId: 'totalScope',
      title: 'Total Scopes',
      value: jsdocCoverage.expectedCount,
    },
    {
      myId: 'documentedScopes',
      title: 'Documented Scopes',
      value: jsdocCoverage.actualCount,
    },
    {
      myId: 'coveragePercentage',
      title: 'Coverage Percentage',
      value: `${jsdocCoverage.coveragePercent}%`,
    },
  ]);

  generateConsoleTable('Components File Coverage', [
    {
      myId: 'totalComponents',
      title: 'Total Component Files',
      value: JSXFileCoverage.totalComponents,
    },

    {
      myId: 'componentsWithStoriesOrPropTypes',
      title: 'Fully Documented Component Files',
      value: JSXFileCoverage.componentsWithStoriesOrPropTypes,
    },
    {
      myId: 'componentsWithStories',
      title: 'Components with stories',
      value: JSXFileCoverage.componentsWithStories,
    },
    {
      myId: 'storyBookCoveragePercent',
      title: 'Storybook Coverage percent',
      value: `${JSXFileCoverage.storyBookCoveragePercent}%`,
    },
    {
      myId: 'fullyDocumentedFileCoverage',
      title: 'Fully documented files / Total files',
      value: `${JSXFileCoverage.storyBookOrPropTypesCoveragePercent}%`,
    },
    {
      myId: 'propTypesCoverage',
      title: 'num of prop types / total props',
      value: `${JSXFileCoverage.propTypesCoverage}%`,
    },
  ]);

  generateConsoleTable(
    'Completely Covered Files - combined score of JSDoc and Component Files(Fully Covered Files)',
    [
      {
        myId: 'numOfScopes',
        title: 'Total Scopes',
        value: completelyCoveredFiles.totalExpectedCount,
      },
      {
        myId: 'numOfDocumentedScopes',
        title: 'Documented Scopes',
        value: completelyCoveredFiles.totalActualCount,
      },
      {
        myId: 'coveragePercentage',
        title: 'Coverage Percentage',
        value: `${completelyCoveredFiles.totalCoveragePercent}`,
      },
    ]
  );

  generateConsoleTable(
    'Total Coverage - combined score of JSDoc and Component Files(PropTypes Coverage)',
    [
      {
        myId: 'numOfScopes',
        title: 'Total Scopes',
        value: totalCoverage.totalExpectedCount,
      },
      {
        myId: 'numOfDocumentedScopes',
        title: 'Documented Scopes',
        value: totalCoverage.totalActualCount,
      },
      {
        myId: 'coveragePercentage',
        title: 'Coverage Percentage',
        value: `${totalCoverage.totalCoveragePercent}`,
      },
    ]
  );

  console.log('\n###########################################################');
};

module.exports = printOutputSummary;

import gql from 'graphql-tag';

const UPSERT_SETTING = gql`
  mutation(
    $difficulty: Int!
    $latam: Boolean!
    $present: Boolean!
    $preterite: Boolean!
    $imperfect: Boolean!
    $future: Boolean!
    $conditional: Boolean!
    $presentPerfect: Boolean!
    $futurePerfect: Boolean!
    $pastPerfect: Boolean!
    $conditionalPerfect: Boolean!
    $subjPresent: Boolean!
    $subjImperfect: Boolean!
    $subjPresentPerfect: Boolean!
  ) {
    upsertSetting(
      data: {
        difficulty: $difficulty
        latam: $latam
        present: $present
        preterite: $preterite
        imperfect: $imperfect
        future: $future
        conditional: $conditional
        presentPerfect: $presentPerfect
        futurePerfect: $futurePerfect
        pastPerfect: $pastPerfect
        conditionalPerfect: $conditionalPerfect
        subjPresent: $subjPresent
        subjImperfect: $subjImperfect
        subjPresentPerfect: $subjPresentPerfect
      }
    ) {
      id
      latam
      difficulty
      createdAt
    }
  }
`;

const MY_SETTING = gql`
  query {
    me {
      id
      name
      email
      setting {
        id
        latam
        difficulty
        present
        preterite
        imperfect
        future
        conditional
        presentPerfect
        futurePerfect
        pastPerfect
        conditionalPerfect
        subjPresent
        subjImperfect
        subjPresentPerfect
      }
    }
  }
`;

export { MY_SETTING, UPSERT_SETTING };

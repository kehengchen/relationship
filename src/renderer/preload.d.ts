type Character = import('@prisma/client').Character;
type Group = import('@prisma/client').Group;
type GroupRelation = import('@prisma/client').GroupRelation;
type Relationship = import('@prisma/client').Relationship;

type GroupRelationInfo = GroupRelation & {
  group: Group;
};
type CharacterInfo = Character & {
  groups: GroupRelationInfo[];
};

type RelationshipInfo = Relationship & {
  character: Character;
  relativeCharactor: Character;
};

declare global {
  interface Window {
    apis: {
      getCharacters: () => Promise<CharacterInfo[]>;
      getCharactersWithoutGroup: () => Promise<Character[]>;
      createCharacter: (
        name: string,
        comments: string,
        groups: number[],
      ) => Promise<CharacterInfo>;
      updateCharacter: (
        id: number,
        name: string,
        comments: string,
        groups: number[],
      ) => Promise<CharacterInfo>;
      deleteCharacters: (ids: number[]) => Promise<CharacterInfo[]>;

      getGroups: () => Promise<Group[]>;
      createGroup: (name: string, comments: string) => Promise<Group>;
      updateGroup: (
        id: number,
        name: string,
        comments: string,
      ) => Promise<Group>;
      deleteGroups: (ids: number[]) => Promise<Group>;

      getRelations: () => Promise<RelationshipInfo[]>;
      createRelation: (
        characterId: number,
        relativeCharactorId: number,
        name: string,
      ) => Promise<Relationship>;
      updateRelation: (id: number, name: string) => Promise<Relationship>;
      deleteRelation: (ids: number[]) => Promise<boolean>;
    };
  }
}

export {};

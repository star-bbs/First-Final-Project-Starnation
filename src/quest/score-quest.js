function scoreQuest(user, questId, choice) {
    user.completed[questId] = true;
    user.constellations.push(choice.id); 

    return user;
}
export default scoreQuest;
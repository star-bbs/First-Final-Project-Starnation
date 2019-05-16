function hasCompletedAllQuests(quests, session) {
    for(let i = 0; i < quests.length; i++) {
        const quest = quests[i];
        if(!session.completed[quest.id]) {
            return false;
        }
    }
    return true;
}
export default hasCompletedAllQuests;
function distanceFromHqInBlocks(block){
   switch (block) {
    case 43:
        return 1;
        break;
    case 50:
        return 8;
        break;
    case 34:
        return 8;
        break;
    default:
        break;
   }
}
function distanceFromHqInFeet(feet){
    switch (feet) {
        case 43:
            return 264;
            break;
        case 50:
            return 2112;
            break;
        case 34:
            return 2112;
            break;
        default:
            break;
    }
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start)*264)
}
function calculatesFarePrice(start, destination){
    const distance = Math.abs((destination - start)*264)
    if (distance <= '400') {
        return 0;
    } else if( distance > '400' && distance <= '2000'){
        return ((distanceTravelledInFeet()-'400')*2)
    } else if (distance > '2000' && distance <= '2500'){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}

    
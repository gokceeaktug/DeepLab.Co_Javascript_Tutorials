var team1_score1=3;
var team1_score2=4;
var team1_score3=5;
var team2_score1=7;
var team2_score2=8;
var team2_score3=9;

var team1_average= (team1_score1+team1_score2+team1_score3)/3;
var team2_average= (team2_score1+team2_score2+team2_score3)/3;

if(team1_average<team2_average)
{
     console.log( "team1  : " + "won with " +team1_average  + " points" );
}
 else
{
    console.log("team2 : "  + "won with " + team2_average + "points");
 }



//SOLUTIONS

var scoreJohn = (89 +120 +103) /3;
var scoreMike=(116+94+123) /3;
var scoreMary=(97+134+105) /3;

console.log(scoreJohn,scoreMike,scoreMary);

if(scoreJohn>scoreMike && scoreJohn>scoreMary)
{
    console.log("John's team wins with" + scoreJohn + "points");
}
else if(scoreMike > scoreJohn && scoreMike > scoreMary)
{
    console.log("Mike's team wins with " + scoreMike +" points");
}
else if(scoreMary>scoreJohn && scoreMary>scoreMike)
{
    console.log("Mary's team wins with " + scoreMary + "points") ;  
}
else
{
    console.log("nobody is not won");
}

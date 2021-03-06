var IconButton = mui.IconButton
var ListItem = mui.ListItem
var IconMenu = mui.IconMenu
var MenuItem = mui.MenuItem
var FontIcon = mui.FontIcon
var LinearProgress = mui.LinearProgress

Reward = React.createClass({
  propTypes: {
    reward: React.PropTypes.object.isRequired
  },

	infoMenuClicked(e, item){
		var rId = this.props.reward._id;
		if(item.props.index == 2){
			Meteor.call('removeReward', rId)
		}
	},

  render() { 
  	var reward = this.props.reward;
    var completed = this.props.completed || 0;

    var completePercentage = (completed / reward.points ) * 100;

  	var iconButton = <FontIcon className="material-icons">info</FontIcon>

  	var iconMenu = <IconMenu iconButtonElement={iconButton} 
  			onItemTouchTap={this.infoMenuClicked}>
		  <MenuItem primaryText="Edit" index={1} />
		  <MenuItem primaryText="Delete" index={2} />
		</IconMenu>

  	return (
  		<ListItem 
  			primaryText={reward.name + " " + reward.points}
  			rightIconButton={iconMenu} 
  			secondaryText={
  				<LinearProgress mode="determinate" value={completePercentage} />
		    }>
  		</ListItem>	
		)
  }
})
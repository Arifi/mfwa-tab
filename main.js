// NOTE! This code is for demonstration purposes only and does not contain any kind of
// 		 error handling. MUST be revised before using in production.

"use strict";
//
function OnNewShellUI(shellUI) {
	// This is the start point of a ShellUI module.
    return{
        OnNewShellFrame: function(shellFrame){
            //
            return {
                OnNewShellListing: function(shellListing){
                    return{
                        OnNewShellListing: function(){
							//
                        },
                        OnSelectionChanged: function(selectedItems){
                            //
                            var tab = shellFrame.RightPane.AddTab("tab-web", "Tab", "_last");
                                // Show our dashboard.
                                tab.ShowDashboard("tab-web", selectedItems);
                                tab.Visible = true;
                                //tab.Unselect();
                                tab.Select();
                                // We succeeded; return true.
                                return true;
                        }
                    }
                }
            }
        }
    }
}

# MifortTimers
> If you don't want to read, you can simply watch this short [video result](https://drive.google.com/file/d/1rsEYVa14DxRZi66owPYVZ6TP6Nwc4MMK/view)

This app demonstrates two ways of ChangeDetectionStrategy.

The app has 3 types of timers which uses different types of change detection strategy : 

1. **default**  ( *default value: 100 sec )
2. **onPush** ( *default value: 200 sec )
3. **manual onPush** ( *default value: 300 sec )

Button "Add" passes the set value with input binding.
The first timer changes every second because of default change detection strategy. 
The second refreshes all the changes only by a button "Add" click.
The third in addition to simple OnPush strategy shows it's changes every two seconds with help of change detection's "detectChanges" method (manually).







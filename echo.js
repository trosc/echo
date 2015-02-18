(function() {
    "use strict";

    trosc.sys.imports();
    
    main(function(args) {
        printf("%s\n", args.join(' '));
        exit(0);
    });

    ready();
})();
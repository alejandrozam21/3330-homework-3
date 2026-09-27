$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

 // Add dashboard values
    $("#username").text(username);
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);
    $("#notification-num").text(notifAmt);


    // Add sales table rows
    sales.forEach(function (sale) {

        let row = $("<tr>");

        row.append($("<td>").text(sale.product));
        row.append($("<td>").text(sale.quantity));
        row.append($("<td>").text(sale.revenue));

        $("#salesTableBody").append(row);
    });


    // Add activity list items
    activities.forEach(function (activity) {

        let item = $("<li>").text(activity.message);

        $("#activity-list").append(item);
    });


    // Add customer table rows
    customers.forEach(function (customer) {

        let row = $("<tr>");

        row.append($("<td>").text(customer.name));
        row.append($("<td>").text(customer.email));

        let status = $("<span>")
            .addClass("status")
            .text(customer.status);

        if (customer.status === "Active") {
            status.addClass("status-active");
        }
        else {
            status.addClass("status-pending");
        }

        row.append($("<td>").append(status));
        row.append($("<td>").text(customer.joined));

        $("#customerTableBody").append(row);
    });


    // Add system status messages
    messages.forEach(function (message) {

        let item = $("<li>").text(message.messsage);

        $("#system-status-list").append(item);
    });


    // Add notification list items
    notifications.forEach(function (notification) {

        let item = $("<li>").text(notification.messsage);

        $("#notifications-list").append(item);
    });


    // Add task list items
    tasks.forEach(function (task) {

        let item = $("<li>").text(task.messsage);

        $("#tasks-list").append(item);
    });


    // Convert all buttons to jQuery UI buttons
    $("button").button();


    // Convert dashboard tabs to jQuery UI tabs
    $("#dashboardTabs").tabs();


    // Convert accordion to jQuery UI accordion
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });


    // Convert registration date to jQuery UI datepicker
    $("#customerDate").datepicker();


    // Create customer dialog
    $("#customerDialog").dialog({

        autoOpen: false,
        modal: true,
        width: 450,

        buttons: {

            "Create Customer": function () {

                var name = $("#customerName").val();
                var email = $("#customerEmail").val();

                if (!name || !email) {

                    alert(
                        "Please enter a name and email."
                    );

                    return;
                }

                alert("Customer created: " + name);

                $(this).dialog("close");
            },

            "Cancel": function () {

                $(this).dialog("close");
            }
        }
    });


    // Open customer dialog when New Customer button is clicked
    $("#newCustomerButton").on("click", function () {

        $("#customerDialog").dialog("open");
    });


});
